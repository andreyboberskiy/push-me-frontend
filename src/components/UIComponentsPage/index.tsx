import React from 'react';

import {
  Container,
  Section,
  Button,
  Header,
  ComponentsContainer,
  Row,
  Text,
  TextInput,
} from './styles';

const UIComponentsPage = () => {
  return (
    <Container>
      <Section>
        <Header>Buttons</Header>
        <ComponentsContainer>
          <Row>
            <Button size="lg" variant="lightFilled">
              Light Filled LG
            </Button>
            <Button size="sm" variant="lightFilled">
              Light Filled SM
            </Button>
            <Button size="xs" variant="lightFilled">
              Light Filled XS
            </Button>
          </Row>
          <Row>
            <Button size="lg" variant="lightOutlined">
              Light Outlined LG
            </Button>
            <Button size="sm" variant="lightOutlined">
              Light Outlined SM
            </Button>
            <Button size="xs" variant="lightOutlined">
              Light Filled XS
            </Button>
          </Row>
          <Row>
            <Button size="lg" variant="darkFilled">
              Dark Filled LG
            </Button>
            <Button size="sm" variant="darkFilled">
              Dark Filled SM
            </Button>
            <Button size="xs" variant="darkFilled">
              Dark Filled XS
            </Button>
          </Row>
          <Row>
            <Button size="lg" variant="darkOutlined">
              Dark Outlined LG
            </Button>
            <Button size="sm" variant="darkOutlined">
              Dark Outlined SM
            </Button>
            <Button size="xs" variant="darkOutlined">
              Dark Outlined XS
            </Button>
          </Row>
          <Row>
            <Button size="lg" variant="redFilled">
              Red Filled LG
            </Button>
            <Button size="sm" variant="redFilled">
              Red Filled SM
            </Button>
            <Button size="xs" variant="redFilled">
              Red Filled XS
            </Button>
          </Row>
          <Row>
            <Button size="lg" variant="redOutlined">
              Red Outlined LG
            </Button>
            <Button size="sm" variant="redOutlined">
              Red Outlined SM
            </Button>
            <Button size="xs" variant="redOutlined">
              Red Outlined XS
            </Button>
          </Row>
        </ComponentsContainer>
      </Section>
      <Section>
        <Header>Typography</Header>
        <ComponentsContainer>
          <Text fontFamily={0} fontSize={4} mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text fontFamily={1} fontSize={4} mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text fontFamily={2} fontSize={4} mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </ComponentsContainer>
      </Section>
      <Section>
        <Header>TextInputs</Header>
        <ComponentsContainer>
          <TextInput placeholder="Primary" />
        </ComponentsContainer>
      </Section>
    </Container>
  );
};
export default UIComponentsPage;
