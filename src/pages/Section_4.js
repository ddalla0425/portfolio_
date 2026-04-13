import { Github } from "react-bootstrap-icons";

export function Section4() {
  return (
    <section id="section_4">
      <div className="flex wrap">
        <div className="title flex wrap w100">
          <div>
            <h1>
              티슈인맥
              <ul className="link_icon">
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/ddalla0425/TN-project2/tree/master"
                  >
                    <Github />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://blimu.notion.site/3HDS-3848d735f48449eba1b060a89d446ac9"
                  >
                    <img src="/images/Shape.png" alt="Notion 아이콘" />
                  </a>
                </li>
              </ul>
            </h1>
            <div>
              <span className="pointStrong">
                넓고 얕은 관계를 지향하는 <strong>SNS형 개인 블로그</strong>{" "}
                플랫폼 서비스
              </span>
              <span className="description">
                화려한 기능 구현 보단 데이터 무결성 보장과 객체 지향적인 데이터
                흐름 설계에 집중하여, 안정적인 시스템 아키텍처 기본기를 다진
                프로젝트
              </span>
            </div>
          </div>
          <div className="side_info">
            <p>팀 구성: 5명</p>
            <p>역할 : 팀원</p>
            <span>24.03.20 ~ 24.04.12</span>
          </div>
        </div>
        <div className="project">
          <ul className="preview">
            <li>
              <img
                src="/images/tissu_main.gif"
                alt="티슈인맥 메인 화면 동작 gif"
              />
            </li>
            <li>
              <img
                src="/images/tissu_pay.gif"
                alt="티슈인맥 결제 화면 동작 gif"
              />
            </li>
            <li>
              <img
                src="/images/tissu_write.gif"
                alt="티슈인맥 글 작성 동작 gif"
              />
            </li>
            <li>
              <img
                src="/images/tissu_folder.gif"
                alt="티슈인맥 폴더 동작 gif"
              />
            </li>
          </ul>
          <dl className="stack">
            <dt>프론트엔드</dt>
            <dd>JavaScript, HTML5, CSS3, Thymeleaf</dd>
          </dl>
          <dl>
            <dt>백엔드</dt>
            <dd>Java, Spring Boot, MyBatis, MySQL</dd>
          </dl>
          <dl>
            <dt>도구</dt>
            <dd>Github, Figma, Notion</dd>
          </dl>

          <ul className="details">
            <li>
              <h2>
                <strong className="point">데이터 무결성</strong> Transaction 및
                SelectKey를 활용한 복합 데이터 무결성 확보
              </h2>
              <ul>
                <li>
                  - <strong>문제:</strong> 게시글 작성 시 '본문', '첨부 이미지',
                  '태그'가 각각 다른 테이블에 저장되며, 특히 게시글-태그 간의
                  다대다(N:M) 매핑 시 데이터 불일치(고아 데이터) 위험 인지.
                </li>
                <li>
                  - <strong>해결 및 성과:</strong>
                  <ul>
                    <li>
                      •단일 PostService 메서드 내에서{" "}
                      <code>@Transactional</code>을 활용하여 3개의 개별 Insert
                      로직을 하나의 트랜잭션으로 결합.
                    </li>
                    <li>
                      •특히 <code>&lt;selectKey&gt;</code> (LAST_INSERT_ID)를
                      활용해 게시글 Insert 직후 발급된 PK를 매핑 테이블에 즉시
                      동기화하여, 중간 예외 발생 시 전체 롤백(Rollback)을 통한
                      완벽한 데이터 무결성 보장.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <h2>
                <strong className="point">쿼리 최적화</strong> Bulk Insert 및
                Upsert 연산을 통한 DB 부하 최소화
              </h2>
              <ul>
                <li>
                  - <strong>문제:</strong> 다수의 첨부파일이나 기본 폴더 세팅
                  시, 반복적인 단건 Insert로 인해 불필요한 데이터베이스 커넥션
                  낭비 및 네트워크 I/O 병목 발생 우려.
                </li>
                <li>
                  - <strong>해결 및 성과:</strong>
                  <ul>
                    <li>
                      •MyBatis의 <code>&lt;foreach&gt;</code> 구문을 활용한{" "}
                      <strong>Bulk Insert</strong>를 적용하여 대량의 첨부파일
                      데이터를 한 번의 쿼리로 일괄 처리.
                    </li>
                    <li>
                      •폴더 생성 로직에 <code>ON DUPLICATE KEY UPDATE</code>
                      (Upsert) 구문을 적용하여, 기존 데이터 유무를 판별하는
                      Select 쿼리 없이 단일 쿼리로 Insert/Update를 분기
                      처리함으로써 데이터베이스 왕복 횟수를 획기적으로 단축.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <h2>
                <span className="point">데이터 흐름 및 아키텍처</span> 통합 DTO
                및 DB View 기반의 구조 최적화
              </h2>
              <ul>
                <li>
                  - <strong>문제:</strong> 다수의 엔티티 데이터를 뷰 템플릿과
                  주고받을 때 파라미터가 파편화되고, 게시글 목록 조회 시 매번
                  복잡한 Join 연산이 발생하여 응답 속도 저하 우려.
                </li>
                <li>
                  - <strong>해결 및 성과:</strong>
                  <ul>
                    <li>
                      <strong className="subPoint">•Facade DTO 설계:</strong>{" "}
                      컨트롤러와 서비스 간의 통신을 최적화하기 위해 연관
                      도메인을 캡슐화한 <code>WriteDTO</code>를 설계하여 메서드
                      시그니처의 복잡성을 낮춤.
                    </li>
                    <li>
                      <span className="subPoint">•DB View 활용:</span> 게시글,
                      프로필, 좋아요 수 등을 미리 조인해 둔{" "}
                      <strong>가상 테이블(post_view)</strong>을 설계하여, 런타임
                      환경에서의 쿼리 복잡도를 낮추고 도메인 조회 성능을 최적화.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
