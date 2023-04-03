import React from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

/** @deprecated Use `React Router hooks` instead */
export interface WithRouterProps {
  location: Location;
}

export const withRouter = <Props extends WithRouterProps>(
  Component: React.ComponentType<Props>,
) => (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return (
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(props as Props)}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  };
