export function Section2() {
  return (
    <section id="section_2">
      <div className="flex wrap">
        <div className="title flex wrap w100">
          <div>
            <h1>SKILLS</h1>
            <p className="pointStrong">
              단순한 기능 구현을 넘어, 아키텍처 설계와 AI를 활용한 개발
              생산성(DX) 고도화를 고민합니다.
            </p>
          </div>
        </div>
        <div className="wrapper flex wrap">
          <div className="skill-category flex wrap">
            <h3>
              <strong className="point">Architecture & AI-Driven DX</strong>
            </h3>
            <ul className="w100 flex wrap badges">
              <li>
                <img
                  src="https://img.shields.io/badge/Feature_Sliced_Design-3178C6?style=for-the-badge"
                  alt="FSD Architecture"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/AI_Code_Agents-4B32C3?style=for-the-badge&logo=robot&logoColor=white"
                  alt="AI Code Agents"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/Gemini_CLI-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white"
                  alt="Gemini CLI"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/GitHub_Copilot-000000?style=for-the-badge&logo=githubcopilot&logoColor=white"
                  alt="GitHub Copilot"
                />
              </li>
            </ul>

            <ul className="details">
              <li>
                - <strong>Feature-Sliced Design (FSD):</strong> 비즈니스 로직과
                UI를 분리하고 도메인 단위로 구조를 설계하여, 코드 결합도를
                낮추고 재사용성을 높이는 아키텍처 지향
              </li>
              <li>
                - <strong>AI Models &amp; API 활용 파이프라인:</strong> 프로젝트
                내 `.md` 기반의 룰셋을 정의하고, AI CLI 및 외부 모델 API를
                연동하여 Git Diff 기반의 컨벤션 맞춤형 커밋 자동 생성 등 개발
                워크플로우(DX) 개선
              </li>
              <li>
                - <strong>AI Pair Programming:</strong> 특정 도구에 종속되지
                않고 다양한 AI 에이전트(Copilot, Gemini 등)를 상황에 맞게
                활용하여, 보일러플레이트 작성을 최소화하고 코어 비즈니스 로직 및
                트러블슈팅에 집중하는 생산성 극대화
              </li>
            </ul>
          </div>

          <div className="skill-category flex wrap">
            <h3>
              <strong className="point">Frontend</strong>
            </h3>
            <ul className="w100 flex wrap badges">
              <li>
                <img
                  src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                  alt="TypeScript"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"
                  alt="React"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/Zustand-262b37?style=for-the-badge&logo=zustand&logoColor=white"
                  alt="Zustand"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"
                  alt="React Query"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/Redux-593d88?style=for-the-badge&logo=redux&logoColor=white"
                  alt="Redux"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/Chakra_Ui-41E0FD?style=for-the-badge&logo=chakraui&logoColor=white"
                  alt="Chakra Ui"
                />
              </li>
            </ul>

            <ul className="details">
              <li>
                - <strong>State Management:</strong> Zustand를 활용한 경량화된
                클라이언트 전역 상태 관리 및 React Query(TanStack Query)를 통한
                서버 상태(데이터 캐싱, 동기화) 분리 설계
              </li>
              <li>
                - <strong>TypeScript:</strong> 인터페이스와 제네릭을 활용한
                엄격한 타입 정의로 런타임 에러를 사전 방지하고 개발 안정성 확보
              </li>
              <li>
                - <strong>Custom Auth Handling:</strong> Serverless(Supabase,
                Firebase) 환경에서 글로벌 Fetch 함수를 커스텀하여 401 에러 발생
                시 토큰 Refresh 및 API 자동 재시도(Retry) 메커니즘 직접 구현
              </li>
              <li>
                - <strong>UI/UX & 퍼블리싱:</strong> 웹 퍼블리셔 경력을 바탕으로
                한 탄탄한 HTML/CSS 마크업 및 Chakra UI, Styled-Components 등을
                활용한 반응형 컴포넌트 설계
              </li>
            </ul>
          </div>

          <div className="skill-category flex wrap">
            <h3>
              <strong className="point">Backend</strong>
            </h3>
            <ul className="w100 flex wrap badges">
              <li>
                <img
                  src="https://img.shields.io/badge/Java_21-007396?style=for-the-badge&logo=Java&logoColor=white"
                  alt="Java 21"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white"
                  alt="Spring Boot"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white"
                  alt="Spring Security"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/JPA-black?style=for-the-badge"
                  alt="JPA"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/Spring_AI-6DB33F?style=for-the-badge&logo=spring&logoColor=white"
                  alt="Spring AI"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSONWebTokens&logoColor=white"
                  alt="JWT"
                />
              </li>
            </ul>

            <ul className="details">
              <li>
                - <strong>Spring Framework:</strong> Spring Boot, Spring
                Security, JPA를 활용한 안정적인 RESTful API 서버 설계 및 구현
              </li>
              <li>
                - <strong>API Architecture:</strong> REST API Level 2 성숙도
                모델을 준수하여 명확한 URI 설계 및 HTTP 상태 코드(상황별 예외
                처리)를 활용한 객체지향적 API 설계
              </li>
              <li>
                - <strong>ORM & DB Optimization:</strong> Hibernate를 통한
                엔티티 연관관계 매핑 및 Querydsl을 활용한 복잡한 동적 쿼리 성능
                최적화
              </li>
              <li>
                - <strong>AI Integration:</strong> Spring AI를 활용하여 임베딩
                기반 유사도 측정 모델(Cosine Similarity) 등 AI 기능을 백엔드
                생태계 내에서 직접 서빙 가능
              </li>
            </ul>
          </div>

          <div className="skill-category flex wrap">
            <h3>
              <strong className="point">DevOps & Data Pipeline</strong>
            </h3>
            <ul className="w100 flex wrap badges">
              <li>
                <img
                  src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
                  alt="Docker"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white"
                  alt="n8n"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/Cloudflare_Tunnel-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"
                  alt="Cloudflare"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"
                  alt="GitHub Actions"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"
                  alt="MySQL"
                />
              </li>
            </ul>

            <ul className="details">
              <li>
                - <strong>Workflow Automation:</strong> Docker 환경에 n8n을
                독립적으로 구축하고, Cloudflare Tunnel을 연동하여 포트 포워딩
                없이 안전한 로컬-외부 통신(Webhook) 환경 설계
              </li>
              <li>
                - <strong>System Integration:</strong> Gmail API와 Telegram Bot
                API를 연동하여 사용자의 승인(Interactive)이 포함된
                Human-in-the-loop 스팸 필터링 파이프라인 구축
              </li>
              <li>
                - <strong>CI/CD & Cloud:</strong> GitHub Actions를 활용한 자동화
                배포 파이프라인 구축 및 GCP/AWS 환경에서의 인프라/비용(Budget
                Alert) 관리 경험
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
