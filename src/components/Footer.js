const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer text-center bg-dark text-light container-fluid flex-column pt-3">
      <div className="text-center d-block bg-dark text-light container-fluid pt-3"><ul>Copyright &copy; {today.getFullYear()}</ul></div>
    </footer>
  );
};

export default Footer;
