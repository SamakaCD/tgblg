export interface GetTelegramMessagesWithIcaResponse {
  messages: GetTelegramMessagesWithIcaResponse.Message[];
}

export namespace GetTelegramMessagesWithIcaResponse {
  export interface Message {
    date: number;
    message: string;
  }
}
