import { useInput } from "../../hooks/useInput";
import DefaultButton from "../DefaultButton";
import Textarea from "../Textarea";
import { PostReportWrapp, PostReportTextarea } from "./PostStyles";

export const PostReport = () => {
  const reportTextarea = useInput({ initialValue: "" });

  const handleSubmit = () => {
    if (!reportTextarea.value) return;

    alert("Reported");

    reportTextarea.clearValue();
  };

  return (
    <PostReportWrapp>
      <PostReportTextarea>
        <Textarea
          value={reportTextarea.value}
          onChange={reportTextarea.onChange}
          placeholder="Your report text"
        />
      </PostReportTextarea>
      <DefaultButton
        $fullWidth
        text="Report"
        $bgColor="#0095f6"
        onClick={handleSubmit}
      />
    </PostReportWrapp>
  );
};
