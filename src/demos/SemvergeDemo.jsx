import { Stage } from '../stageshow/kit/stage'
import { Roll } from '../stageshow/kit/motion/Roll'
import { Check } from '../stageshow/kit/parts/Check'
import { Icon } from '../stageshow/kit/parts/Icon'
import { stageLook } from './look'
import './demos.css'

// A release run reads its changes, picks the next version, checks readiness,
// then publishes. The cursor presses the one action; everything else is the
// system responding to it. Plays once when the card scrolls into view.

const CHANGES = [
  { id: '248', kind: 'ship:feature', title: 'Scope tokens to workspace' },
  { id: '247', kind: 'ship:fix', title: 'Retry release tags once' },
]

const CHECKS = ['Tag created', 'Release notes', 'CI checks']

const initial = { step: 0, version: 'v0.1.2', publishing: false, published: false }
const poster = { step: 6, version: 'v0.1.3', publishing: false, published: true }

async function script(a) {
  await a.wait(420)
  a.mark('changes')
  await a.set({ step: 1 })
  await a.wait(1000)
  a.mark('version')
  await a.set({ step: 2, version: 'v0.1.3' })
  await a.wait(900)
  await a.set({ step: 3 })
  await a.wait(520)
  await a.set({ step: 4 })
  await a.wait(520)
  await a.set({ step: 5 })
  await a.wait(700)
  a.mark('publish')
  await a.move('publish')
  await a.wait(200)
  await a.click({ at: 'publish', x: 0.78, y: 0.62 })
  await a.set({ publishing: true })
  await a.wait(1100)
  await a.set({ published: true, publishing: false, step: 6 })
  await a.wait(2400)
}

function State({ published }) {
  return (
    <span className="sv-state" data-done={published || undefined}>
      <i />
      <Roll variant="fade">{published ? 'RELEASED' : 'RUNNING'}</Roll>
    </span>
  )
}

function Top({ published }) {
  return (
    <>
      <header className="sv-top">
        <span className="sv-word">SEMVERGE <span>/ release run</span></span>
        <State published={published} />
      </header>
      <div className="sv-sub">
        <span>main</span>
        <span className="sv-faint">release.yml</span>
        <span className="sv-run">run 412</span>
      </div>
    </>
  )
}

function Changes({ s }) {
  return (
    <section className="sv-col sv-changes">
      <p className="sv-label"><b>01</b> Detect changes</p>
      <div className="sv-change-list">
        {CHANGES.map((change, i) => (
          <div
            className="sv-change"
            key={change.id}
            data-in={s.step >= 1 || undefined}
            style={{ transitionDelay: s.step >= 1 ? `${i * 110}ms` : '0ms' }}
          >
            <div className="sv-change-top">
              <span>#{change.id}</span>
              <span className="sv-kind">{change.kind}</span>
            </div>
            <p>{change.title}</p>
          </div>
        ))}
      </div>
      <p className="sv-note" data-in={s.step >= 1 || undefined}>
        <Check on={s.step >= 1} size={12} />
        <span>2 changes since v0.1.2</span>
      </p>
    </section>
  )
}

function Version({ s }) {
  return (
    <section className="sv-col sv-version-col">
      <p className="sv-label"><b>02</b> Choose version</p>
      <div className="sv-version">
        <span className="sv-muted">NEXT RELEASE</span>
        <Roll className="sv-vnum">{s.version}</Roll>
        <span className="sv-bump">
          <Roll variant="fade">{s.step >= 2 ? 'MINOR + PATCH' : 'RESOLVING'}</Roll>
        </span>
      </div>
      <ul className="sv-checks">
        {CHECKS.map((label, i) => (
          <li key={label} data-on={s.step >= 3 + i || undefined}>
            <Check on={s.step >= 3 + i} pending={s.step >= 2 && s.step < 3 + i} size={14} />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Publish({ s }) {
  return (
    <section className="sv-col sv-publish">
      <p className="sv-label"><b>03</b> Publish</p>
      <div className="sv-result" data-done={s.published || undefined}>
        <span className="sv-result-mark">
          <Check on={s.published} pending={s.publishing} size={24} />
        </span>
        <div className="sv-result-copy">
          <strong>
            <Roll variant="fade">{s.published ? 'Release published' : 'Ready to ship'}</Roll>
          </strong>
          <span>{s.published ? 'v0.1.3 · tag + notes' : 'Tag, notes and checks'}</span>
        </div>
      </div>
      <span
        className="sv-btn"
        data-target="publish"
        data-cursor="pointer"
        data-busy={s.publishing || undefined}
        data-done={s.published || undefined}
      >
        <Roll variant="fade">{s.published ? 'View release' : s.publishing ? 'Publishing' : 'Publish release'}</Roll>
        <span className="sv-btn-icon" data-shown={s.published || undefined}>
          <Icon name="external" size={12} />
        </span>
      </span>
    </section>
  )
}

export default function SemvergeDemo() {
  return (
    <div className="demo-visual" aria-hidden="true">
      <Stage
        {...stageLook}
        width={660}
        height={620}
        compact={{ below: 560, width: 358, height: 580 }}
        initial={initial}
        poster={poster}
        script={script}
        play="once"
        unframed
        cursor={{
          at: { wide: { x: 612, y: 138 }, compact: { x: 322, y: 110 } },
          style: 'arrow',
          kind: 'pointer',
        }}
        className="demo-sv"
      >
        {(s, _rect, layout) =>
          layout === 'compact' ? (
            <div className="sv sv--compact">
              <Top published={s.published} />
              <div className="sv-c-changes">
                <p className="sv-label"><b>01</b> Detected changes</p>
                {CHANGES.map((change, i) => (
                  <div
                    className="sv-change"
                    key={change.id}
                    data-in={s.step >= 1 || undefined}
                    style={{ transitionDelay: s.step >= 1 ? `${i * 110}ms` : '0ms' }}
                  >
                    <div className="sv-change-top">
                      <span>#{change.id}</span>
                      <span className="sv-kind">{change.kind}</span>
                    </div>
                    <p>{change.title}</p>
                  </div>
                ))}
              </div>
              <div className="sv-c-version">
                <div className="sv-version">
                  <span className="sv-muted">NEXT RELEASE</span>
                  <Roll className="sv-vnum">{s.version}</Roll>
                  <span className="sv-bump">
                    <Roll variant="fade">{s.step >= 2 ? 'MINOR + PATCH' : 'RESOLVING'}</Roll>
                  </span>
                </div>
                <ul className="sv-checks">
                  {CHECKS.map((label, i) => (
                    <li key={label} data-on={s.step >= 3 + i || undefined}>
                      <Check on={s.step >= 3 + i} pending={s.step >= 2 && s.step < 3 + i} size={13} />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sv-c-publish">
                <div className="sv-result" data-done={s.published || undefined}>
                  <span className="sv-result-mark">
                    <Check on={s.published} pending={s.publishing} size={22} />
                  </span>
                  <div className="sv-result-copy">
                    <strong>
                      <Roll variant="fade">{s.published ? 'Release published' : 'Ready to ship'}</Roll>
                    </strong>
                    <span>{s.published ? 'v0.1.3 · tag + notes' : 'Tag, notes and checks'}</span>
                  </div>
                </div>
                <span
                  className="sv-btn"
                  data-target="publish"
                  data-cursor="pointer"
                  data-busy={s.publishing || undefined}
                  data-done={s.published || undefined}
                >
                  <Roll variant="fade">{s.published ? 'View release' : s.publishing ? 'Publishing' : 'Publish release'}</Roll>
                  <span className="sv-btn-icon" data-shown={s.published || undefined}>
                    <Icon name="external" size={12} />
                  </span>
                </span>
              </div>
            </div>
          ) : (
            <div className="sv">
              <Top published={s.published} />
              <div className="sv-board">
                <Changes s={s} />
                <Version s={s} />
                <Publish s={s} />
              </div>
            </div>
          )
        }
      </Stage>
    </div>
  )
}
