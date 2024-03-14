import { toast } from "@/components/ui/use-toast";
import { userLogin } from "@/services/user";
import { useMutation } from "@tanstack/react-query";

export function useLoginUser() {
  return useMutation({
    mutationFn: userLogin,
    onSuccess: () => {
      toast({
        title: "Berhasil Login!",
      });
    },
    onError:() => {
      toast({
        variant:"destructive",
        title: "gagal Login!",
      });
    },
  });
}

export default useLoginUser;
