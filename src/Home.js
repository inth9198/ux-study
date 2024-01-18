import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Section = ({ title, children }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

export default function HomePage() {
  const [isMiller, setIsMiller] = useState(false);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          setIsMiller(!isMiller);
        }}
      >
        밀러의 법칙 적용
      </Button>
      {isMiller ? (
        <Container>
          <Paper style={{ margin: "16px", padding: "16px" }}>
            <Section title="마법의 숫자 7을 내세워서 불필요한 디자인 제약을 정당화 하지마라">
              <Typography paragraph>
                <b>밀러의 법칙 오해</b>: 많은 디자이너와 개발자들이 밀러의
                법칙을 '사용자가 한 번에 7개의 항목만 기억할 수 있다'고
                단순화하여 해석합니다. 이로 인해 UI 디자인에서 불필요한 제약으로
                작용할 수 있습니다.
              </Typography>
              <Typography paragraph>
                <b>유연한 접근 필요성</b>: 밀러의 연구는 단기 기억의 한계를
                강조했지만, 이는 절대적인 숫자가 아닙니다. 사용자 인터페이스는
                다양한 사용자의 기억력과 처리 능력을 고려해야 하며, 일률적인
                '7개 항목' 규칙에 얽매여서는 안 됩니다.
              </Typography>
              <Typography paragraph>
                <b>적절한 컨텍스트 고려</b>: 정보의 종류와 사용자가 수행하는
                작업의 성격에 따라 적절한 정보의 양과 구성이 달라져야 합니다.
                예를 들어, 복잡한 작업에서는 더 적은 정보를 제공하는 것이
                사용자의 이해를 돕습니다.
              </Typography>
            </Section>
            <Section title="사용자가 쉽게 처리하고 이해하고 기억할 수 있게 콘텐츠 덩어리를 작게 나눠 정리하자">
              <Typography paragraph>
                <b>청킹(Chunking)의 중요성</b>:기법은 사용자가 정보를 더 쉽게
                처리하고 기억할 수 있게 합니다. 예를 들어, 전화번호를
                3-3-4자리로 나누어 기억하는 것처럼, 정보를 관리하기 쉬운 단위로
                나누어야 합니다.
              </Typography>
              <Typography paragraph>
                <b>정보 구조화</b>: 정보를 논리적으로 구조화하고 카테고리별로
                나누어 사용자가 쉽게 정보를 찾고 이해할 수 있도록 해야 합니다.
                이는 웹사이트의 메뉴 구성, 앱의 내비게이션 등에 적용될 수
                있습니다.
              </Typography>
              <Typography paragraph>
                <b>시각적 단서 활용</b>:색상, 크기, 공간 등의 시각적 요소를
                활용하여 관련 정보를 묶거나 구분짓는 것도 사용자의 인지 부담을
                줄이는 데 도움이 됩니다.
              </Typography>
            </Section>
            <Section title="단기 기억 용량은 사람에 따라, 그리고 기존 지식과 상황적 맥락에 따라 달라진다는 것을 기억하자">
              <Typography paragraph>
                <b>개인차 고려</b>: 모든 사용자가 동일한 인지 능력을 가지고 있지
                않습니다. 어떤 사용자는 더 많은 정보를 처리할 수 있고, 다른
                사용자는 더 적은 양을 선호할 수 있습니다. 디자인은 이러한
                개인차를 고려해야 합니다.
              </Typography>
              <Typography paragraph>
                <b>지식 및 경험의 영향</b>: 사용자의 기존 지식과 경험도 정보
                처리 능력에 영향을 미칩니다. 예를 들어, 특정 분야의 전문가는 그
                분야의 정보를 더 많이 및 더 빠르게 처리할 수 있습니다.
              </Typography>
              <Typography paragraph>
                <b>상황적 맥락</b>: 상황에 따라 사용자의 주의력과 인지 능력이
                달라질 수 있습니다. 예를 들어, 분주한 환경에서는 사용자가 더
                적은 정보만을 처리할 수 있습니다.
              </Typography>
            </Section>
          </Paper>
        </Container>
      ) : (
        <div>
          마법의 숫자 7을 내세워서 불필요한 디자인 제약을 정당화 하지마라 -
          **밀러의 법칙 오해**: 많은 디자이너와 개발자들이 밀러의 법칙을
          '사용자가 한 번에 7개의 항목만 기억할 수 있다'고 단순화하여
          해석합니다. 이로 인해 UI 디자인에서 불필요한 제약으로 작용할 수
          있습니다. - **유연한 접근 필요성**: 밀러의 연구는 단기 기억의 한계를
          강조했지만, 이는 절대적인 숫자가 아닙니다. 사용자 인터페이스는 다양한
          사용자의 기억력과 처리 능력을 고려해야 하며, 일률적인 '7개 항목'
          규칙에 얽매여서는 안 됩니다. - **적절한 컨텍스트 고려**: 정보의 종류와
          사용자가 수행하는 작업의 성격에 따라 적절한 정보의 양과 구성이
          달라져야 합니다. 예를 들어, 복잡한 작업에서는 더 적은 정보를 제공하는
          것이 사용자의 이해를 돕습니다. 사용자가 쉽게 처리하고 이해하고 기억할
          수 있게 콘텐츠 덩어리를 작게 나눠 정리하자 - **청킹(Chunking)의
          중요성**: 정보를 작은 단위로 나누는 '청킹' 기법은 사용자가 정보를 더
          쉽게 처리하고 기억할 수 있게 합니다. 예를 들어, 전화번호를 3-3-4자리로
          나누어 기억하는 것처럼, 정보를 관리하기 쉬운 단위로 나누어야 합니다. -
          **정보 구조화**: 정보를 논리적으로 구조화하고 카테고리별로 나누어
          사용자가 쉽게 정보를 찾고 이해할 수 있도록 해야 합니다. 이는
          웹사이트의 메뉴 구성, 앱의 내비게이션 등에 적용될 수 있습니다. -
          **시각적 단서 활용**: 색상, 크기, 공간 등의 시각적 요소를 활용하여
          관련 정보를 묶거나 구분짓는 것도 사용자의 인지 부담을 줄이는 데 도움이
          됩니다. 단기 기억 용량은 사람에 따라, 그리고 기존 지식과 상황적 맥락에
          따라 달라진다는 것을 기억하자 - **개인차 고려**: 모든 사용자가 동일한
          인지 능력을 가지고 있지 않습니다. 어떤 사용자는 더 많은 정보를 처리할
          수 있고, 다른 사용자는 더 적은 양을 선호할 수 있습니다. 디자인은
          이러한 개인차를 고려해야 합니다. - **지식 및 경험의 영향**: 사용자의
          기존 지식과 경험도 정보 처리 능력에 영향을 미칩니다. 예를 들어, 특정
          분야의 전문가는 그 분야의 정보를 더 많이 및 더 빠르게 처리할 수
          있습니다. - **상황적 맥락**: 상황에 따라 사용자의 주의력과 인지 능력이
          달라질 수 있습니다. 예를 들어, 분주한 환경에서는 사용자가 더 적은
          정보만을 처리할 수 있습니다.
        </div>
      )}
    </div>
  );
}
