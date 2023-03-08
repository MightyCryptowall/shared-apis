import { renderHook, waitFor, act } from "@testing-library/react";
import { createWrapper } from "./utils";
import usePostMutation from "../mutations/usePostMutation";

describe("query hook", () => {
  test("successful create a new post query hook", async () => {
    const { result } = renderHook(() => usePostMutation(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.mutate({
        name: "Code Testing",
      });
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});
