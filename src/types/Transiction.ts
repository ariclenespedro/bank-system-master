export type Transiction = {
    amount: number;
    balanceAfter: number;
    createdAt: Date;
    n_reference: number;
    client: {
        fullname: string;
    };
    entity_id: number;
    description: string;
  };