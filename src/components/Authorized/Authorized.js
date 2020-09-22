const checkPermissions = (authority, currentAuthority, target, Exception) => {
  if(currentAuthority){
    return target;
  }
  return typeof Exception === 'function' ? Exception() : Exception;
}

const Authorized = props => {
  const {children, authority, currentAuthority, noMatch=null} = props;
  const childrenRender = typeof children === 'undefined' ? null : children;
  return checkPermissions(authority, currentAuthority, childrenRender, noMatch);
}

export default Authorized;