import styled from "styled-components/native";

interface ContainerTextProps {
    color?: string;
    size: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props: { color: string; }) => (props.color ? `color: ${props.color};` : '') }
    font-size: ${(props: { size: string; }) => props.size};
`;