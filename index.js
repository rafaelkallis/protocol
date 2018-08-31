/*
    This file is part of the Covee Network protocol (smart contracts).

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const contract = require('truffle-contract');

exports.protocol = contract({contractName: 'Covee', abi: './build/contracts/Covee.json'});
exports.token = contract({contractName: 'Covee_Token', abi: './build/contracts/Covee.json'});
