import { UpdateDateColumn, CreateDateColumn } from 'typeorm'

export class DateColumn {
  @CreateDateColumn({ name: 'CreatedAt', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public createdAt: Date

  @UpdateDateColumn({ name: 'UpdatedAt', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  public updatedAt: Date
}
