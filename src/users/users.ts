import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class Users {
    private users = [
        {
            id: "1",
            name: "Jeffrin",
            email: "jeffringoldwin@jmangroup.com",
            role: "admin"
        },
        {
            id: "2",
            name: "Goldwin",
            email: "jeffringoldwin@jmangroup.com",
            role: "user"
        }
    ]

    findAll(role?: 'admin' | 'user') {
        if(role) {
            const rolesArray = this.users.filter(user => user.role === role)
            if(rolesArray.length === 0) throw new NotFoundException("Users not found")
            return rolesArray
        }
        return this.users
    }

    findOne(id: string) {
        const user = this.users.find(user => user.id === id)
        if(!user) throw new NotFoundException("User not found")
        return user
    }

    create(createUserDto : CreateUserDto) {
        this.users.push(createUserDto)
    }

    update(id: string, updateUserDto : UpdateUserDto) {
        this.users = this.users.map(user => {
            if(user.id === id) {
                return {...user, ...updateUserDto}
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: string) {
        const deletedUser = this.findOne(id)
        
        this.users = this.users.filter(user => user.id !== id)
    }

}
