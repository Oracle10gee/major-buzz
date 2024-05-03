import "./App.css";
import {
  Row,
  Col,
  Form,
  InputGroup,
  Input,
  InputGroupText,
  FormGroup,
  Label,
} from "reactstrap";
import Logo from "./assets/logo.svg";
import personIcon from "./assets/personIcon.svg";
import lockIcon from "./assets/lockIcon.svg";

function App() {
  return (
    <div>
      <Row>
        <Col md="4">
          <section>
            <div className="container p-5">
              <div className="logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="header mt-5">
                <h2 className="text-danger">Admin Portal</h2>
                <p>Log in to your buzz admin account </p>
              </div>
              <div className="text-inputs mt-5">
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail" className="fw-bold">
                      Phone Number
                    </Label>
                    <InputGroup>
                      <InputGroupText>
                        <img src={personIcon} alt="person" />
                      </InputGroupText>
                      <Input placeholder="phone number" className="py-3" />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup className="mt-4">
                    <Label for="exampleEmail" className="fw-bold">
                      Password
                    </Label>
                    <InputGroup>
                      <InputGroupText>
                        <img src={lockIcon} alt="padlock" />
                      </InputGroupText>
                      <Input placeholder="phone number" className="py-3" />
                    </InputGroup>
                  </FormGroup>

                  <div className="checkboxes">
                    <div className="d-flex justify-content-between">
                      <FormGroup check inline>
                        <Input type="checkbox" />
                        <Label check className="check-label fw-bold">
                          Remember Me
                        </Label>
                      </FormGroup>
                      <div>
                        <a href="/">Forgot Password</a>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
              <div className="button mt-5">
                <button className="btn btn-dark w-100 py-3 rounded-pill">Log In</button>
              </div>
            </div>
          </section>
        </Col>
        <Col md="8"></Col>
      </Row>
    </div>
  );
}

export default App;
