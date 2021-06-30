import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
//The firebase context contains values firebase and Fieldvalue,
//firebase in irebase context has auth,firestore
//Note the firebase context has been initialized throughout the application,
//In firebase.js/library the services auth and firestore have been loaded into the firebase namespace.
//Firebase is the same as firebase.
//for more info visit firebase.js in C/lib/ 
import FirebaseContext from '../context/FirebaseContext';
import UserContext from '../context/UserContext';
import * as ROUTES from '../constants/Routes';
import { DEFAULT_IMAGE_PATH } from '../constants/paths';

export default function Header() {
    // User from user auth listener which listens for change in auth state and stores value in localstorage.
    const { user } = useContext(UserContext); 
    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();

    return (
      <header className="h-16 bg-white border-b border-gray-primary mb-8">
        <div className="container mx-auto max-w-screen-lg h-full">
          <div className="flex justify-between h-full">
            <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
              <h1 className="flex justify-center w-full">
                <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                  <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12" />
                </Link>
              </h1>
            </div>
            <div className="text-gray-700 text-center flex items-center align-items">
              { user ? (
                <>
                  <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                    <svg
                      className="w-8 mr-6 text-black-light cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </Link>
  
                  <button
                    type="button"
                    title="Sign Out"
                    onClick={() => {
                      firebase.auth().signOut();
                      history.push(ROUTES.LOGIN);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        firebase.auth().signOut();
                        history.push(ROUTES.LOGIN);
                      }
                    }}
                  >
                    <svg
                      className="w-8 mr-6 text-black-light cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </button>
                  {user && (
                    <div className="flex items-center cursor-pointer">
                      <Link to={`/p/${user?.username}`}>
                        <img
                          className="rounded-full h-8 w-8 flex"
                          //The image of the user
                          // src={`/images/avatars/${user?.displayName}.jpg`} usisahau kurudisha image ww hezzy..
                          //The name of the user
                          alt={`${user?.displayName} profile`}
                          //The default image path if there is no userimage or name...like whatsapp bila db..this is what is displayed.
                          onError={(e) => {
                            e.target.src = DEFAULT_IMAGE_PATH;
                          }}
                        />
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <Link to={ROUTES.LOGIN}>
                    <button
                      type="button"
                      className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                    >
                      Log In
                    </button>
                  </Link>
                  <Link to={ROUTES.SIGN_UP}>
                    <button
                      type="button"
                      className="font-bold text-sm rounded text-blue-medium w-20 h-8"
                    >
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
  