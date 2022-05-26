import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { Auth } from "aws-amplify";

export default function GoogleSocialsButton() {
    return(
      <div><button onClick={() => Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google
      })}>
        Sign In with Google
      </button>
    </div>
    );
  }
