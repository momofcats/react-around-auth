import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isDelCardPopupOpen, setIsDelCardPopupOpen] = useState(false);

	function handleDelCardClick() {
		setIsDelCardPopupOpen(true);
	}

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}

	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsDelCardPopupOpen(false);

	}

	function handleEscKey(evt) {
		if (evt.key === "Escape") {
			closeAllPopups();
		}
	}

	
	useEffect(() => {
		document.addEventListener("keydown", handleEscKey);

		return () => {
			document.removeEventListener("keydown", handleEscKey);
		};
	});

	
	return (
		<>
			<Header />
			<Main
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
				onCloseCard = {handleDelCardClick}
			/>
			<Footer />
			<PopupWithForm
				name="profile"
				title="Edit profile"
				buttonText="Save"
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
			>
				<input
					id="name-input"
					required
					pattern="[a-zA-Z\s\-]+"
					type="text"
					className="form__input js-input-name"
					name="name"
					placeholder="Name"
					minLength="2"
					maxLength="40"
				/>
				<span id="name-input-error" className="form__input-error"></span>
				<input
					id="job-input"
					required
					type="text"
					className="form__input js-input-job"
					name="about"
					placeholder="About me"
					minLength="2"
					maxLength="200"
				/>
				<span id="job-input-error" className="form__input-error"></span>
			</PopupWithForm>
			<PopupWithForm
				name="photo-form"
				title="New Place"
				buttonText="Create"
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
			>
				<input
					id="title-input"
					type="text"
					className="form__input js-input-title"
					name="name"
					placeholder="Title"
					minLength="1"
					maxLength="30"
					required
				/>
				<span id="title-input-error" className="form__input-error"></span>
				<input
					id="link-input"
					type="url"
					className="form__input js-input-link"
					name="link"
					placeholder="Image link"
					required
				/>
				<span id="link-input-error" className="form__input-error"></span>{" "}
			</PopupWithForm>
			<PopupWithForm
				name="change-avatar"
				title="Change profile picture"
				buttonText="Save"
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
			>
				<input
					id="avatar-input"
					type="url"
					className="form__input js-input-link"
					name="avatar"
					placeholder="Url"
					required
				/>
				<span id="avatar-input-error" className="form__input-error"></span>
			</PopupWithForm>
			<PopupWithForm name="del-card" title="Are you sure?" buttonText="Yes" isOpen={isDelCardPopupOpen} onClose={closeAllPopups}/>
			<ImagePopup />
		</>
	);
}

export default App;