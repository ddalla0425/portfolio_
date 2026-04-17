import { Github } from "react-bootstrap-icons";

export function Section8() {
  return (
    <section id="section_8">
      <div className="flex wrap">
        <div className="title flex wrap w100">
          <div>
            <h1>
              NA 혼자 쓴다
              <ul className="link_icon">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ddalla0425/project-budget-book"
                  >
                    <Github />
                  </a>
                </li>
                {/* <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://yanolja-research-front.vercel.app/"
                  >
                    Vercel 확인
                  </a>
                </li> */}
              </ul>
            </h1>
            <div>
              <span className="pointStrong">
                FSD 기반 <strong>수동(Non-Auto)</strong> 개인 자산 관리 가계부
                서비스
              </span>
              <span className="description">
                Serverless 환경과 Supabase 기반 DB 설계 및 Edge Function
                구현부터 FSD 아키텍처 적용까지 풀스택으로 구축하며,
                <br /> 증가하는 프로젝트 복잡도를 제어하기 위해 AI 기반
                DX(개발자 경험)를 적극 도입 중인 프로젝트입니다. (진행 중)
              </span>
            </div>
          </div>
          <div className="side_info">
            <p>단독 미니 프로젝트</p>
            <span>2026.03 ~ 진행중</span>
            <span className="point">AI 기반 DX 도입 (26.04.10)</span>
          </div>
        </div>
        <div className="project">
          <dl className="stack">
            <dt>프론트엔드</dt>
            <dd>React, TypeScript, Zustand, React Query, Styled Components</dd>
          </dl>
          <dl>
            <dt>백엔드</dt>
            <dd>
              <span className="point">Serverless</span> Supabase (PostgreSQL,
              Edge Functions), Firebase Auth
            </dd>
          </dl>
          <dl>
            <dt>배포</dt>
            <dd>Vercel (Frontend), Supabase Infrastructure</dd>
          </dl>
          <dl>
            <dt>도구 & DX</dt>
            <dd>
              GitHub, AI Models &amp; API (Gemini, Copilot 등 다양한 AI 에이전트
              활용)
            </dd>
          </dl>

          <ul className="details">
            <li>
              <h2>
                <strong className="point">Architecture & Full-Stack</strong>{" "}
                Supabase 기반 Serverless 생태계 및 FSD 아키텍처 구축
              </h2>
              <ul>
                <li>
                  - <strong>풀스택 구현:</strong> 프론트엔드 작업에 국한되지
                  않고, Supabase를 활용해 직접 관계형 DB(RDBMS)를 설계하고
                  데이터 타입을 TypeScript와 동기화. 필요에 따라 Edge Function을
                  추가하며 백엔드 인프라와 API 통신을 직접 구현하여 Serverless
                  생태계에 대한 높은 이해도 확보.
                </li>
                <li>
                  - <strong>FSD 도입:</strong> 프로젝트의 규모가 커짐에 따라
                  모듈 간 결합도를 낮추고 재사용성을 높이기 위해
                  FSD(Feature-Sliced Design) 철학을 도입. 비즈니스 로직과 UI
                  컴포넌트를 명확히 격리하여 향후 기능 확장이 용이한 탄탄한 뼈대
                  확립.
                </li>
              </ul>
            </li>

            <li>
              <h2>
                <strong className="point">DX Engineering</strong> 프로젝트
                스케일업에 따른 AI 개발 파이프라인 (DX) 도입
              </h2>
              <ul>
                <li>
                  - <strong>문제 인식:</strong> DB 스키마 수정, 타입 업데이트,
                  보일러플레이트 작성 등 프로젝트의 복잡도가 기하급수적으로
                  증가함에 따라, 개발 속도 저하 및 컨벤션 유지의 어려움 직면.
                </li>
                <li>
                  - <strong>해결 및 성과:</strong>
                  <ul>
                    <li>
                      • 개발자 경험(DX) 개선과 생산성 확보를 위해 VSCode 환경에
                      GitHub Copilot과 Gemini Code Agent를 전격 도입.
                    </li>
                    <li>
                      • 특히 프로젝트 루트에 <code>GEMINI.md</code>를 생성하여
                      커밋 메시지 컨벤션을 룰셋화하고, Gemini CLI를 연동해 Git
                      Diff 기반 커밋 자동 생성 파이프라인을 구축. 인지적
                      비용(Cognitive Load)을 줄이고 핵심 도메인 로직 개발에만
                      집중할 수 있는 환경 마련.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <h2>
                <strong className="point">Security & Network</strong> 글로벌
                Fetch 커스텀을 통한 Token Refresh 메커니즘 구현
              </h2>
              <ul>
                <li>
                  - <strong>문제 및 해결:</strong> Serverless 환경(Supabase,
                  Firebase Auth)에서 401 Unauthorized 에러 발생 시의 불안정한
                  통신 문제를 해결하기 위해, 단순 라이브러리 의존을 넘어
                  Supabase 클라이언트의 글로벌 fetch 함수 내부에{" "}
                  <strong>
                    토큰 갱신(Refresh) 및 API 자동 재시도(Retry) 메커니즘을 직접
                    커스텀 구현
                  </strong>
                  하여 네트워크 안정성 확보.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
