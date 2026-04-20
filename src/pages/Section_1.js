import { Github } from "react-bootstrap-icons";

export function Section1() {
  return (
    <section id="section_1">
      <div className="flex wrap">
        <div className="person">
          <img src="/images/증명사진.png" alt="증명사진" />
          <h1>김하온</h1>
          <p>Growth Recorder</p>
          <ul className="link_icon">
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/ddalla0425"
              >
                <Github />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://ddalla0425.notion.site"
              >
                <img src="/images/Shape.png" alt="Notion 아이콘" />
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="competency">
          <ul className="flex wrap">
            <li>
              <h2>교육</h2>
              <p>
                AI-X 프로젝트 부트캠프
                <br />
                딥러닝과 생성 모델 활용한 AI 프로젝트 수행
              </p>
              <span>2024.07.04 ~ 2024.08.28 [완료] </span>
              <p>
                자바 웹개발자 과정
                <br />
                React, SpringBoot, AWS 웹 개발 교육 수료
              </p>
              <span>2023.12.27 ~ 2024.06.19 [완료]</span>
              <p>
                스마트기기 UI/UX디자인 과정 완료
                <br /> UI/UX 디자인 실습 중심 교육 수료
              </p>
              <span>2017.03.14 ~ 2017.09.15 [완료]</span>
            </li>
            <li>
              <h2>경력</h2>
              <p>
                아라커뮤니케이션
                <br />
                HTML,CSS, Javascript, JQuery 를 사용하여 퍼블리싱 업무를 담당
              </p>
              <span>2018.07 - 2020.08 ⎮ 웹퍼블리셔[대리]</span>
            </li>
            <li>
              <h2>학력</h2>
              <p>
                성덕 여자 상업 고등학교
                <br />
                디지털 정보처리과
              </p>
              <span>2008.03 - 2011.02 ⎮ 졸업</span>
            </li>
            <li>
              <h2>자격증</h2>
              <ul>
                <li>
                  •<strong>2012.04</strong>
                  <span>2종 보통 운전면허증</span>
                </li>
                <li>
                  •<strong>2017.05</strong>
                  <span>GTQ 포토샵 1급</span>
                </li>
                <li>
                  •<strong>2010.06</strong>
                  <span>컴퓨터활용능력 3급</span>
                </li>
                <li>
                  •<strong>2022.03</strong>
                  <span>굴착기운전기능사</span>
                </li>
                <li>
                  •<strong>2022.03</strong>
                  <span>지게차운전기능사</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="introduction w100">
          <h2>자기소개</h2>
          <strong class="pointStrong">
            "기록과 공유를 통해 반복되는 문제를 개선하고, 팀과 함께 성장하는
            개발자 김하온입니다."
          </strong>

          <p>
            새로운 기술을 배우거나 에러를 마주할 때, 저는 그 과정을 체계적으로
            기록하여 <strong>'같은 문제로 다시 멈추지 않는 것'</strong>을
            중요하게 생각합니다.
            <br />
            개인 프로젝트에서는 반복되는 비효율을 줄이고자 AI 도구를 활용한 커밋
            파이프라인을 구축해 보며, 개발 환경(DX)을 개선하고 문제를 해결해
            나가는 과정의 즐거움과 중요성을 배웠습니다.
          </p>

          <p>
            팀 프로젝트에 임할 때는{" "}
            <strong>'제가 배운 지식이 팀의 허들을 낮추는 데 쓰이길'</strong>{" "}
            바랍니다.
            <br />
            프로젝트 진행 중 팀원들이 Git 병합(Merge)에 어려움을 겪을 때, 브랜치
            전략 자료를 직접 정리하고 공유하여 충돌 문제를 줄였던 경험이
            있습니다.
            <br />
            이처럼 제 지식을 동료들과 나누고, 서로의 방식을 이해하며 맞춰가는
            과정에서 큰 보람을 느낍니다.
          </p>

          <p>
            2년간의 웹 퍼블리셔 경력으로 다진 꼼꼼함을 잊지 않고, 사용자에게는
            안정적인 서비스를 제공하며 동료들에게는{" "}
            <strong>'믿고 협업할 수 있는 책임감 있는 개발자'</strong>로 꾸준히
            기여하고 싶습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
