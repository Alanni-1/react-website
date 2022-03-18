import React from 'react'
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage'
import { useTranslation } from 'react-i18next'
import {
	Container,
	FormContent,
	Form,
	FormH1,
	FormWrap,
	Top,
	Icon,
	FormLabel,
	FormInput,
	FormButton,
	FormLink,
} from './SigninElements'

const Signin = () => {
	const { t } = useTranslation()

	return (
		<>
			<Container>
				<FormWrap>
					<Top>
						<Icon to="/">dolla</Icon>
						<ChangeLanguage />
					</Top>
					<FormContent>
						<Form action="#">
							<FormH1>{t('signin.title')}</FormH1>
							<FormLabel htmlFor="for">{t('signin.email')}</FormLabel>
							<FormInput type="email" required />
							<FormLabel htmlFor="for">{t('signin.password')}</FormLabel>
							<FormInput type="password" required />
							<FormButton type="submit">{t('signin.btn')}</FormButton>
							<FormLink to='/signin'>{t('signin.forgot')}</FormLink>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	)
}

export default Signin
