import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
  Table,
} from "reactstrap";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const users = useSelector((state) => state.users);

  const handleClick = () => {};

  console.log(users);

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <Container>
            <Link href="/">
              <div className="navbar-brand">
                <a>User List Application</a>
              </div>
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link href="/add">
                    <NavLink>Add User</NavLink>
                  </Link>
                </NavItem>
              </Nav>
              <NavbarText>Simple Text</NavbarText>
            </Collapse>
          </Container>
        </Navbar>
      </div>

      <Container>
        <h2 className="text-center py-3">All Users</h2>
        <Table dark hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <Link href={`/edit/${user.id}`}>
                    <a className="btn btn-warning btn-sm">Edit</a>
                  </Link>{" "}
                  |{" "}
                  <a onClick={handleClick} className="btn btn-danger btn-sm">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
