import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import styles from "./FeaturedBikeNavigation.module.css";

interface Tab {
  name: string;
  href: string;
}

// Define the props for the FeaturedBikeNavigation component
interface FeaturedBikeNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onSelectTab: (key: string | null) => void;
}

const FeaturedBikeNavigation: React.FC<FeaturedBikeNavigationProps> = ({
  tabs,
  activeTab,
  onSelectTab,
}) => {
  return (
    <TabContainer
      activeKey={activeTab}
      onSelect={onSelectTab}
      transition={true}
    >
      <Row>
        <Col>
          <Nav fill variant="underline" className={styles.nav}>
            {tabs?.map((tab, index) => (
              <NavItem key={index} className={styles.navItem}>
                <NavLink
                  className={`${styles.navLink} ${
                    activeTab === tab.href ? styles.navLinkActive : ""
                  }`}
                  eventKey={tab.href}
                >
                  {tab.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>
      </Row>
    </TabContainer>
  );
};

export default FeaturedBikeNavigation;
