Score : $900$ points

## Problem Statement

In "Takahashi-ya", a ramen restaurant, basically they have one menu: "ramen", but $N$ kinds of toppings are also offered. When a customer orders a bowl of ramen, for each kind of topping, he/she can choose whether to put it on top of his/her ramen or not. There is no limit on the number of toppings, and it is allowed to have all kinds of toppings or no topping at all. That is, considering the combination of the toppings, $2^N$ types of ramen can be ordered.

Akaki entered Takahashi-ya. She is thinking of ordering some bowls of ramen that satisfy both of the following two conditions:

- Do not order multiple bowls of ramen with the exactly same set of toppings.
- Each of the $N$ kinds of toppings is on two or more bowls of ramen ordered.

You are given $N$ and a prime number $M$. Find the number of the sets of bowls of ramen that satisfy these conditions, disregarding order, modulo $M$. Since she is in extreme hunger, ordering any number of bowls of ramen is fine.

## Constraints

- $2 \leq N \leq 3000$
- $10^8 \leq M \leq 10^9 + 9$
- $N$ is an integer.
- $M$ is a prime number.

## Subscores

- $600$ points will be awarded for passing the test set satisfying $N \leq 50$.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the number of the sets of bowls of ramen that satisfy the conditions, disregarding order, modulo $M$.

```input1
2 1000000007
```

```output1
2
```

Let the two kinds of toppings be A and B. Four types of ramen can be ordered: "no toppings", "with A", "with B" and "with A, B". There are two sets of ramen that satisfy the conditions:

- The following three ramen: "with A", "with B", "with A, B".
- Four ramen, one for each type.

```input2
3 1000000009
```

```output2
118
```

Let the three kinds of toppings be A, B and C. In addition to the four types of ramen above, four more types of ramen can be ordered, where C is added to the above four. There are $118$ sets of ramen that satisfy the conditions, and here are some of them:

- The following three ramen: "with A, B", "with A, C", "with B, C".
- The following five ramen: "no toppings", "with A", "with A, B", "with B, C", "with A, B, C".
- Eight ramen, one for each type.

Note that the set of the following three does not satisfy the condition: "'with A', 'with B', 'with A, B'", because C is not on any of them.

```input3
50 111111113
```

```output3
1456748
```

Remember to print the number of the sets modulo $M$. Note that these three sample inputs above are included in the test set for the partial score.

```input4
3000 123456791
```

```output4
16369789
```

This sample input is not included in the test set for the partial score.