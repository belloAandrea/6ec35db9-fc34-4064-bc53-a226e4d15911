import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 Solana Marketplace</p>
    </FooterContainer>
  );
}