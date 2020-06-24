import axios from 'axios';

const apiUrl = 'http://localhost:5000';

class CompanyService {
    //get company
    static getCompanies() {
        return new Promise((resolve, reject) => {
            axios.get(apiUrl + '/api/companies')
                .then(res => {
                    const data = res.data;
                    resolve(
                        data.map(post => ({
                            ...post,
                            createdAt: new Date(post.createdAt)
                        }))
                    );
                })
                .catch(reject)
        });
    }

    //create company
    static insertCompany(text) {
        return axios.post(apiUrl + '/api/companies', {text});
    }

    //delete company
    static deleteCompany(id) {
        return axios.delete(`${apiUrl}/api/companies/${id}`)
    }
}

export default CompanyService;