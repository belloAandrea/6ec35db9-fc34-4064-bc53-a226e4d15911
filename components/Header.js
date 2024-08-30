import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  margin-right: 1rem;
`;

export default function Header() {
  return (
    <Nav>
      <div>Solana Marketplace</div>
      <Ul>
        <Li><Link href='/'>Home</Link></Li>
        <Li><Link href='/about'>About</Link></Li>
        <Li><Link href='/contact'>Contact</Link></Li>
      </Ul>
    </Nav>
  );
}