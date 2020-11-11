import { Drawer, Col, Row } from "antd";
import React from "react";

export const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

class ProfileDrawer extends React.Component {
  render() {
    return (
      <>
        <Drawer
          width={640}
          placement="right"
          closable={true}
          onClose={this.props.closeDrawer}
          visible={this.props.drawerVisible}
        >
          <p
            className="site-description-item-profile-p"
            style={{ marginBottom: 50 }}
          >
            Detail Information
          </p>

          <Row>
            {this.props.data
              ? this.props.data.map((data) => {
                  return (
                    <Col span={12} key={data[0]}>
                      <DescriptionItem title={data[0]} content={data[1]} />
                    </Col>
                  );
                })
              : ""}
          </Row>
        </Drawer>
      </>
    );
  }
}

export default ProfileDrawer;
