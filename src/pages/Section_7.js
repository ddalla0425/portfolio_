export function Section7() {
  return (
    <section id="section_7">
      <div className="flex wrap">
        <div className="title flex wrap w100">
          <div>
            <h1>스마트 메일 자동화 파이프라인 구축</h1>
            <span className="pointStrong">
              반복되는 비효율적 스팸 메일 관리를 위해, 직접 인프라를 구축해{" "}
              <strong>자동화 파이프라인</strong>을 설계한 프로젝트
            </span>
          </div>
          <div className="side_info">
            <p>단독 미니 프로젝트</p>
            <span>26.04.08 ~ 26.04.09</span>
          </div>
        </div>
        <div className="project">
          <dl className="stack">
            <dt>사용 기술</dt>
            <dd>Docker, n8n, Gmail API, Telegram Bot API</dd>
          </dl>
          <dl>
            <dt>핵심 역할</dt>
            <dd>
              인프라 환경 구축, 워크플로우 설계, 서드파티 API 연동, 트러블슈팅
            </dd>
          </dl>
          <dl>
            <dt>배포</dt>
            <dd>Local Docker Container, Cloudflare Tunnel (Webhook 노출)</dd>
          </dl>
          <dl>
            <dt>도구</dt>
            <dd>Telegram BotFather, GCP Console (Budget Alert)</dd>
          </dl>

          <ul className="details">
            <li>
              <h2>
                <strong className="point">인프라 구축</strong> Docker &
                Cloudflare Tunnel 기반 로컬 자동화 환경 설계
              </h2>
              <ul>
                <li>
                  - <strong>문제:</strong> 외부 SaaS 자동화 서비스 이용 시
                  발생하는 비용적 한계를 극복하고 데이터 제어권을 확보할 필요성
                  대두
                </li>
                <li>
                  - <strong>해결 및 성과:</strong> Docker를 활용하여 로컬 환경에
                  n8n 컨테이너를 독립적으로 구축. 외부 서비스(Telegram)의
                  Webhook을 안전하게 수신하기 위해{" "}
                  <strong>
                    Cloudflare Tunnel을 도입하여 포트 포워딩 없는 안전한 통신
                    인프라
                  </strong>{" "}
                  세팅 완료
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <strong className="point">워크플로우 설계</strong>{" "}
                Human-in-the-loop 기반 텔레그램 알림/제어 파이프라인
              </h2>
              <ul>
                <li>
                  - <strong>문제:</strong> 매일 쌓이는 메일을 단순 자동 삭제할
                  경우 중요 메일이 유실될 수 있는 치명적인 리스크 존재
                </li>
                <li>
                  - <strong>해결 및 성과:</strong> 단순 자동화가 아닌, 텔레그램
                  봇(<code>/select_spam_email</code>)과 인터랙티브 버튼을 연동.
                  필터링된 메일 목록을 메신저로 먼저 확인하고{" "}
                  <strong>
                    '승인' 시에만 휴지통으로 이동하도록 Human-in-the-loop
                    아키텍처
                  </strong>{" "}
                  설계. 메일 관리 시간 단축 및 중요 메일 유실률 0% 달성
                </li>
              </ul>
            </li>
            <li>
              <h2>
                <strong className="point">예외 처리 & 비용 최적화</strong> API
                호출 비용 및 Webhook 트리거 충돌 해결
              </h2>
              <ul>
                <li>
                  - <strong>비용/예외 최적화:</strong> 검색된 스팸 메일이 없을
                  경우 파이프라인이 멈추지 않도록 예외 처리 로직 추가 및 API
                  무한 루프 로직 오류로 인한 Quota(할당량) 고갈과 잠재적 과금
                  리스크를 사전 차단하기 위해 GCP Budget Alert(예산 알림) 세팅
                </li>
                <li>
                  - <strong>트러블슈팅:</strong> 텔레그램 다중 명령어 트리거 시
                  발생한 충돌 이슈를 분석하여, 텔레그램 봇 API의 아키텍처
                  한계(1토큰 = 1 Webhook)를 파악하고 워크플로우 로직을 수정하여
                  해결
                  <br />
                  👉{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://grizzly-wallet-e17.notion.site/33d27e1365db806cb43ed0eafd351432?pvs=74"
                  >
                    해당 트러블슈팅 보러가기
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
