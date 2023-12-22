import styled from 'styled-components'
import { C } from '../../Utils'
import { useState } from 'react'

const Input = ({ onChange, $validate = false, $errorTip = '', className, ...restProps }) => {
		const [isHighlighted, setIsHighlighted] = useState(false)
		const inputProps = {
				...restProps,
				$isHighlighted: isHighlighted,
				onChange: ({ target: { value } }) => {
						if (isHighlighted) setIsHighlighted(false)

						onChange(value, $validate ? $validate(value.trim()) : true)
				},
				onBlur: ({ target: { value } }) => {
						value = value.trim()
						let isValid = $validate ? $validate(value) : true

						if (isHighlighted === isValid) setIsHighlighted(!isValid)

						onChange(value, isValid)
				}
		}

		return (
				<InputContainer className={className}>
						<StlInput {...inputProps} />
						<ErrorTip>{isHighlighted ? $errorTip : ''}</ErrorTip>
				</InputContainer>
		)
}

const InputContainer = styled.div`
		display: flex;
		flex-direction: column;
`

const StlInput = styled.input`
		background-color: ${C.INPUT_BG_COLOR};
		border: ${C.INPUT_BORDER};
		border-radius: ${C.INPUT_BORDER_RADIUS};
		width: 100%;
		flex: 1;
		min-height: 35px;
		margin: 3px auto;
		color: rgba(97, 97, 97, 1);
		padding: 5px;
		outline: ${({ $isHighlighted }) => $isHighlighted ? '3px solid red' : 'none'};
		color: #616161;
		&:focus {
				outline: 3px solid #fd8228;
		};
		&::placeholder {
				color: #616161;
		};
`

const ErrorTip = styled.p`
		color: red;
		height: 17px;
		margin: 0;
		font-size: 15px;
`

export { Input }