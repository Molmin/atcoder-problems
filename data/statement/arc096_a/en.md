Score : $300$ points

## Problem Statement

"Pizza At", a fast food chain, offers three kinds of pizza: "A-pizza", "B-pizza" and "AB-pizza". A-pizza and B-pizza are completely different pizzas, and AB-pizza is one half of A-pizza and one half of B-pizza combined together. The prices of one A-pizza, B-pizza and AB-pizza are $A$ yen, $B$ yen and $C$ yen (yen is the currency of Japan), respectively.

Nakahashi needs to prepare $X$ A-pizzas and $Y$ B-pizzas for a party tonight. He can only obtain these pizzas by directly buying A-pizzas and B-pizzas, or buying two AB-pizzas and then rearrange them into one A-pizza and one B-pizza. At least how much money does he need for this? It is fine to have more pizzas than necessary by rearranging pizzas.

## Constraints

- $1 \leq A, B, C \leq 5000$
- $1 \leq X, Y \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $X$ $Y$

## Output

Print the minimum amount of money required to prepare $X$ A-pizzas and $Y$ B-pizzas.

```input1
1500 2000 1600 3 2
```

```output1
7900
```

It is optimal to buy four AB-pizzas and rearrange them into two A-pizzas and two B-pizzas, then buy additional one A-pizza.

```input2
1500 2000 1900 3 2
```

```output2
8500
```

It is optimal to directly buy three A-pizzas and two B-pizzas.

```input3
1500 2000 500 90000 100000
```

```output3
100000000
```

It is optimal to buy $200000$ AB-pizzas and rearrange them into $100000$ A-pizzas and $100000$ B-pizzas. We will have $10000$ more A-pizzas than necessary, but that is fine.