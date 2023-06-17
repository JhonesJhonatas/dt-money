import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from './styles'

export function Transactions() {
    return (
        <div>

            <Header />

            <Summary />

            <TransactionsContainer>

                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="40%">Desenvolvimento de Site</td>
                            <td>
                                <PriceHightLight variant="income">
                                    R$ 12.000,00
                                </PriceHightLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="40">Hamburguer</td>
                            <td>
                                <PriceHightLight variant="outcome">
                                    - R$ 59,00
                                </PriceHightLight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>

            </TransactionsContainer>

        </div>
    )
}