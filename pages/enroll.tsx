import { useRouter } from "next/router";
import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
//import { login } from "../authentication/login";
import Button from "../components/button";
//import { createProfile } from "../services/create_profile";
import { useStore } from "../services/store";
import { login } from "../services/login-user";

const Enroll: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const {
    state: { contract , wallet },
  } = useStore();

  const handleArtistOnboard = async (name) => {

    //TODO contract init and invocation of create Artist()
    console.log("Artist Onboard process started, name: "+name+" wallet: "+wallet+" address: "+contract);
    //createProfile(wallet);
    //login();
    router.push("/artist");
  };
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-hero text-blue-dark text-center mb-[8vh]">
        Join Loop now <br />
      </h1>
      <div className="flex px-12 pb-12 justify-between items-end">
        <div className="flex-1 mr-12">
          <InputGroup className="flex flex-col">
            <Form.Label htmlFor="name">Artist name</Form.Label>
            <FormControl
              placeholder="Enter the artist name"
              aria-label="name"
              style={{ width: "100%", borderRadius: 12 }}
              onChange={(value) => setName(value.currentTarget.value)}
            />
          </InputGroup>
        </div>
        <div>
          <Button
            onClick={() => handleArtistOnboard(name)}
          >
            <div className="flex items-center">
              <span className="mr-6">Signup</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
