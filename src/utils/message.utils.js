const showNotificationMessage = (message = '', type = 'default') => {
	return {
		message,
		autoHideDuration: 6000,
		anchorOrigin: {
			vertical: 'top',
			horizontal: 'center',
		},
		variant: type,
	};
};

export default showNotificationMessage;
