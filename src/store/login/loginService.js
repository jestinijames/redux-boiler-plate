const authenticateUser = (userData) => {
    // The userData can be sent to an API to be authenticated
    return new Promise((resolve) => {
        setTimeout(() => resolve({ username: 'Aby' }), 500); 
    });
};

const logoutUser = () => localStorage.removeItem('user');

const authService = {
    authenticateUser,
    logoutUser
};

export default authService;