Score : $700$ points

## Problem Statement

$N$ people are waiting in a single line in front of the Takahashi Store. The cash on hand of the $i$-th person from the front of the line is a positive integer $A_i$.

Mr. Takahashi, the shop owner, has decided on the following scheme: He picks a product, sets a positive integer $P$ indicating its price, and shows this product to customers in order, starting from the front of the line. This step is repeated as described below.

At each step, when a product is shown to a customer, if price $P$ is equal to or less than the cash held by that customer at the time, the customer buys the product and Mr. Takahashi ends the current step. That is, the cash held by the first customer in line with cash equal to or greater than $P$ decreases by $P$, and the next step begins.

Mr. Takahashi can set the value of positive integer $P$ independently at each step.

He would like to sell as many products as possible. However, if a customer were to end up with $0$ cash on hand after a purchase, that person would not have the fare to go home. Customers not being able to go home would be a problem for Mr. Takahashi, so he does not want anyone to end up with $0$ cash.

Help out Mr. Takahashi by writing a program that determines the maximum number of products he can sell, when the initial cash in possession of each customer is given.

## Constraints

- $1 \leq | N | \leq 100000$
- $1 \leq A_i \leq 10^9(1 \leq i \leq N)$
- All inputs are integers.

## Input

Inputs are provided from Standard Inputs in the following form.

> $N$
> 
> $A_1$
> 
> :
> 
> $A_N$

## Output

Output an integer representing the maximum number of products Mr. Takahashi can sell.

```input1
3
3
2
5
```

```output1
3
```

As values of $P$, select in order $1, 4, 1$.

```input2
15
3
1
4
1
5
9
2
6
5
3
5
8
9
7
9
```

```output2
18
```