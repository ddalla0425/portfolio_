import { Github } from "react-bootstrap-icons";

export function Section3() {
  return (
    <section id="section_3">
      <div className="flex wrap">
        <div className="title flex wrap w100">
          <div>
            <h1>
              소리손순
              <ul className="link_icon">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/sign-muscat"
                  >
                    <Github />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.notion.so/e6b855c636c9476096970c04c5ea9ad1?v=e2781acdf21d4ad3922d86ce4f24186d"
                  >
                    <img src="/images/Shape.png" alt="Notion 아이콘" />
                  </a>
                </li>
              </ul>
            </h1>
            <span className="pointStrong">
              <strong>청각 장애인</strong>과의 언어장벽 해소를 위해 소리, 손,
              입술(순)을 컨셉으로, 의사소통을 학습하는 게임 서비스
            </span>
          </div>
          <div className="side_info">
            <p>팀 구성: 5명</p>
            <p>역할 : 팀장</p>
            <span>24.07.16 ~ 24.08.23</span>
          </div>
        </div>
        <div className="project">
          <ul className="preview">
            <li>
              <img
                src="/images/sorisonsoon_main.png"
                alt="소리손순 메인 화면 동작 gif"
              />
            </li>
            <li>
              <img
                src="/images/sorisonsoon_hand.gif"
                alt="소리손순 손게임 동작 gif"
              />
            </li>
            <li>
              <img
                src="/images/sorisonsoon_lip.gif"
                alt="소리손순 입술게임 동작 gif"
              />
            </li>
            <li>
              <img
                src="/images/sorisonsoon_sound.gif"
                alt="소리손순 소리게임 동작 gif"
              />
            </li>
          </ul>
          <dl className="stack">
            <dt>프론트엔드</dt>
            <dd>JavaScript, React, Redux, Axios, BootStrap</dd>
          </dl>
          <dl>
            <dt>백엔드</dt>
            <dd>
              Java, Spring Boot, JPA, Spring AI, SpringSecurity, JWT, Python,
              FastAPI, MariaDB
            </dd>
          </dl>
          <dl>
            <dt>배포</dt>
            <dd>Vercel, AWS, Docker</dd>
          </dl>
          <dl>
            <dt>도구</dt>
            <dd>Github, Github Actions, Figma, Notion</dd>
          </dl>

          <ul className="details">
            <li>
              <h2>
                <strong className="point">AI & 아키텍처</strong> 서버 병목
                방지를 위한 다원화된 AI 아키텍처 설계
              </h2>
              <ul>
                <li>
                  - <strong>문제 인식:</strong> 프로젝트 핵심인 '수어 포즈
                  인식'을 위해 Python(FastAPI) 기반의 무거운 ML 서버가 가동 중인
                  상황. 오답에 대한 '텍스트 유사도 측정' 연산까지 Python 서버에
                  위임할 경우,{" "}
                  <strong>
                    단일 AI 서버에 트래픽이 집중되어 심각한 병목(Bottleneck)
                    현상이 발생할 위험
                  </strong>{" "}
                  인지.
                </li>
                <li>
                  - <strong>해결 및 성과:</strong>
                  <ul>
                    <li>
                      • 단순 텍스트 비교의 한계를 극복하기 위해 코사인
                      유사도(Cosine Similarity) 알고리즘을 도입하여 의미론적
                      피드백 제공.
                    </li>
                    <li>
                      • Python 서버의 부하를 덜어내기 위해 백엔드 메인 서버에{" "}
                      <strong>Spring AI를 독자적으로 도입</strong>. 텍스트
                      임베딩 연산을 Java 생태계 내부에서 직접 서빙(Direct
                      Serving)하여{" "}
                      <strong>
                        무거운 Vision 처리(Python)와 가벼운 NLP 처리(Spring)를
                        완벽하게 분리하는 리소스 최적화
                      </strong>{" "}
                      달성.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <strong className="point">DB 최적화</strong> 데이터 타입 최적화
                및 QueryDSL을 활용한 랭킹 시스템 개선
              </h2>
              <ul>
                <li>
                  - <strong>성능 최적화:</strong> 실시간 랭킹 집계 시 부동소수점
                  연산 부하 및 인덱스 비효율을 방지하기 위해, 점수를{" "}
                  <strong>
                    정수형(×100)으로 변환 저장하여 DB 정렬 성능 최적화
                  </strong>
                </li>
                <li>
                  - <strong>오너십 및 리팩토링:</strong> 담당 팀원의 부재 시
                  팀장으로서 랭킹 도메인 설계를 직접 주도. 기존 단순 정렬 코드를
                  전면 폐기하고, <strong>QueryDSL 기반의 동적 쿼리</strong>로
                  집계 로직을 리팩토링하여 대용량 데이터 조회 시의 안정성 확보
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <strong className="point">보안 & 아키텍처</strong> 관심사 분리를
                고려한 JWT 모듈화 및 예외 처리 설계
              </h2>
              <ul>
                <li>
                  - <strong>아키텍처 설계:</strong> 토큰 파싱 및 클레임 추출
                  로직을 컨트롤러/필터에 혼재시키지 않고 <code>TokenUtils</code>{" "}
                  클래스로 완벽히 분리하여{" "}
                  <strong>관심사 분리(Separation of Concerns)</strong> 원칙
                  준수. 추후 RTR(Refresh Token Rotation) 도입 시 수정 범위를
                  최소화하도록 결합도를 낮춤
                </li>
                <li>
                  - <strong>보안 및 예외 처리:</strong> 만료된 토큰, 잘못된
                  코드, 미가입 이메일 등 발생 가능한 모든 엣지 케이스(Edge
                  Case)에 대한 상태 코드와 메시지를 세분화하여 클라이언트와
                  명확한 API 통신 규격 확립
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <strong className="point">팀 문화</strong> Agile 프로세스 도입
                및 협업(DX) 리딩
              </h2>
              <ul>
                <li>
                  - <strong>프로세스 엔지니어링:</strong> 단순 일정 관리를 넘어,
                  GitHub Projects를 WBS로 활용한 이터레이션(Iteration) 단위의
                  애자일 스크럼(Scrum) 주도
                </li>
                <li>
                  - <strong>개발자 경험(DX) 향상:</strong> 팀원들의 버전 관리
                  역량 강화를 위해 Git/GitHub 브랜치 전략 기초 자료를 직접 제작
                  및 강의하여 소스코드 병합(Merge) 시 발생하는 충돌 병목 현상
                  해소
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
