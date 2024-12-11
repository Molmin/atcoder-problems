Score : $100$ points

## Problem Statement

AtCoder Inc. sells merchandise through its [online shop](https://suzuri.jp/AtCoder/home).

Takahashi has decided to purchase $N$ types of products from there.<br>
For each integer $i$ from $1$ to $N$, the $i$-th type of product has a price of $P_i$ yen each, and he will buy $Q_i$ of this.

Additionally, he must pay a shipping fee.<br>
The shipping fee is $0$ yen if the total price of the products purchased is $S$ yen or above, and $K$ yen otherwise.

He will pay the total price of the products purchased plus the shipping fee.<br>
Calculate the amount he will pay.

## Constraints

- $1\leq N\leq 100$
- $1\leq S\leq 10000$
- $1\leq K\leq 10000$
- $1\leq P_i\leq 10000$
- $1\leq Q_i\leq 100$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $S$ $K$
> 
> $P_1$ $Q_1$
> 
> $P_2$ $Q_2$
> 
> $\vdots$
> 
> $P_N$ $Q_N$

## Output

Print the amount Takahashi will pay for online shopping.

```input1
2 2000 500
1000 1
100 6
```

```output1
2100
```

Takahashi buys one product for $1000$ yen and six products for $100$ yen each.<br>
Thus, the total price of the products is $1000\times 1+100\times 6=1600$ yen.<br>
Since the total amount for the products is less than $2000$ yen, the shipping fee will be $500$ yen.<br>
Therefore, the amount Takahashi will pay is $1600+500=2100$ yen.

```input2
3 2000 500
1000 1
100 6
5000 1
```

```output2
6600
```

The total price of the products is $1000\times 1+100\times 6+5000\times 1=6600$ yen.<br>
Since the total amount for the products is not less than $2000$ yen, the shipping fee will be $0$ yen.<br>
Therefore, the amount Takahashi will pay is $6600+0=6600$ yen.

```input3
2 2000 500
1000 1
1000 1
```

```output3
2000
```

There may be multiple products with the same price per item.