import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Admin() {
  return (
    <div>
        <h1>Admin</h1>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Employee Management</h2>
                <Button className="w-100" type="submit">
                    Add Employee
                </Button>
                <Button className="w-100" type="submit">
                    Remove Employee
                </Button>
                <Button className="w-100" type="submit">
                    Update Employee
                </Button>
            </Card.Body>
        </Card>
    </div>
  )
}
