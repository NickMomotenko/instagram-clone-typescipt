import React from "react";

import { Link } from "react-router-dom";

import {
  LoginRow,
  CreateNewAccountForm,
  Div,
  LoginTextWithLine,
  StepperItem,
  StepperWrapp,
  StepperContent,
} from "./styles";

import Text from "../../UI/Text";
import Input from "../../UI/Input";
import DefaultButton from "../../UI/DefaultButton";
import { Block, Row } from "../../UI/Layout";

import { useInput } from "../../hooks/useInput";
import { useAuth } from "../../hooks/auth";
import { useForm } from "../../hooks/useForm";
import { useStepper } from "../../hooks/useStepper";

import { baseRoutes } from "../../helpers/base-routes";
import { useDispatch } from "react-redux";
import { SIGNUP } from "../../redux/auth/types";

const CreateNewAccount = () => {
  const { step, stepRef, incrementStep, decrementStep } = useStepper({
    finishStep: 2,
  });
  const email = useInput({ initialValue: "" });
  const password = useInput({ initialValue: "" });
  const nickname = useInput({ initialValue: "" });
  const info = useInput({ initialValue: "" });

  // const dispath = useDispatch();

  const { handleSubmit } = useForm(generateSubmitFunction());

  function generateSubmitFields() {
    let submitFieldsArr = [];

    switch (step) {
      case 1:
        submitFieldsArr = [email, password];
        return submitFieldsArr;

      case 2:
        submitFieldsArr = [nickname, info];
        return submitFieldsArr;
    }
  }

  function generateSubmitFunction() {
    switch (step) {
      case 1:
        return incrementStep;
      case 2:
        return () => console.log(1);
      // dispath({ type: SIGNUP, data: [email, password, nickname, info] });
    }
  }

  function generateStepButton() {
    switch (step) {
      case 1:
        return (
          <DefaultButton
            text="Next"
            type="submit"
            fullWidth
            $bgColor="#0095f6"
          />
        );
      case 2:
        return (
          <>
            <DefaultButton
              text="Prev"
              onClick={(e) => {
                e.preventDefault();
                decrementStep();
              }}
              fullWidth
              $bgColor="#f60062"
            />
            <DefaultButton
              text="Next"
              type="submit"
              fullWidth
              $bgColor="#0095f6"
              style={{ marginLeft: 15 }}
            />
          </>
        );
    }
  }

  return (
    <CreateNewAccountForm
    // onSubmit={(e) => handleSubmit(e, generateSubmitFields())}
    >
      <Block>
        <Block>
          <Text
            text="Create new account"
            // bold
            // center
            // style={{ fontSize: 17, marginBottom: 15 }}
          />
          <Text
            text="Sign up to see photos and videos from your friends."
            // style={{ marginBottom: 15 }}
          />
        </Block>
        <Block
        // style={{ borderBottom: "1px solid #c2cddb", marginBottom: 10 }}
        >
          <Text
            text={`Step #${step}`}
            // bold
            // style={{ paddingLeft: 5, paddingBottom: 4 }}
          />
        </Block>
        <StepperWrapp>
          <StepperContent ref={stepRef}>
            <StepperItem>
              <LoginRow>
                <Input
                  value={email.value}
                  onChange={email.onChange}
                  error={email.error}
                  name="email"
                  ref={email.ref}
                  onBlur={email.checkValidity}
                  placeholder="Email"
                  style={{ width: "100%" }}
                />
              </LoginRow>
              <LoginRow>
                <Input
                  value={password.value}
                  onChange={password.onChange}
                  error={password.error}
                  name="password"
                  ref={password.ref}
                  onBlur={password.checkValidity}
                  placeholder="Password"
                  type="password"
                  style={{ width: "100%" }}
                />
              </LoginRow>
            </StepperItem>
            <StepperItem>
              <LoginRow>
                <Input
                  value={nickname.value}
                  onChange={nickname.onChange}
                  error={nickname.error}
                  name="nickname"
                  ref={nickname.ref}
                  onBlur={nickname.checkValidity}
                  placeholder="Nickname"
                  style={{ width: "100%" }}
                />
              </LoginRow>
              <LoginRow>
                <Input
                  value={info.value}
                  onChange={info.onChange}
                  error={info.error}
                  name="info"
                  ref={info.ref}
                  onBlur={info.checkValidity}
                  placeholder="Info"
                  type="info"
                  style={{ width: "100%" }}
                />
              </LoginRow>
            </StepperItem>
          </StepperContent>
        </StepperWrapp>

        <Block>
          <Row>{generateStepButton()}</Row>
          <Row
          // center
          // style={{ marginTop: 20 }}
          >
            <Div />
            <LoginTextWithLine text="or" color="#917777" />
            <Div />
          </Row>
          <LoginRow
          // style={{ marginTop: 15 }}
          >
            <Text
              // as={Link}
              // to={baseRoutes.login}
              text="Back to Login"
              color="#385185"
            />
          </LoginRow>
        </Block>
      </Block>
    </CreateNewAccountForm>
  );
};

export default CreateNewAccount;
