import React from "react";
import { useForm } from "react-hook-form";
import { FormLabel, Input, Button, Checkbox } from "@chakra-ui/react";

import { TopBar } from "../navigation/TopBar";
import { PageContainer } from "../shared/PageContainer";

const VideoCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <PageContainer>
      <TopBar sectionName="New video" />
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormLabel>Title</FormLabel>
        <Input {...register("title")} />
        <Input {...register("source", { required: "Source is required" })} />
        {errors.source && <p>{errors.source.message}</p>}
        <Checkbox  {...register("published")} defaultIsChecked>Published</Checkbox>
        <Button type="submit">Submit</Button>
      </form>
    </PageContainer>
  );
};

export default VideoCreate;
