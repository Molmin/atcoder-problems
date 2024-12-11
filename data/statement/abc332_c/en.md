Score : $300$ points

## Problem Statement

AtCoder Inc. sells [T-shirts with its logo](https://suzuri.jp/AtCoder/5510290/t-shirt/s/ash).

You are given Takahashi's schedule for $N$ days as a string $S$ of length $N$ consisting of `0`, `1`, and `2`.<br>
Specifically, for an integer $i$ satisfying $1\leq i\leq N$,

- if the $i$-th character of $S$ is `0`, he has no plan scheduled for the $i$-th day;
- if the $i$-th character of $S$ is `1`, he plans to go out for a meal on the $i$-th day;
- if the $i$-th character of $S$ is `2`, he plans to attend a competitive programming event on the $i$-th day.

Takahashi has $M$ plain T-shirts, all washed and ready to wear just before the first day.<br>
In addition, to be able to satisfy the following conditions, he will buy several AtCoder logo T-shirts.

- On days he goes out for a meal, he will wear a plain or logo T-shirt.
- On days he attends a competitive programming event, he will wear a logo T-shirt.
- On days with no plans, he will not wear any T-shirts. Also, he will wash all T-shirts worn at that point. He can wear them again from the next day onwards.
- Once he wears a T-shirt, he cannot wear it again until he washes it.

Determine the minimum number of T-shirts he needs to buy to be able to wear appropriate T-shirts on all scheduled days during the $N$ days. If he does not need to buy new T-shirts, print $0$.<br>
Assume that the purchased T-shirts are also washed and ready to use just before the first day.

## Constraints

- $1\leq M\leq N\leq 1000$
- $S$ is a string of length $N$ consisting of `0`, `1`, and `2`.
- $N$ and $M$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $S$

## Output

Print the minimum number of T-shirts Takahashi needs to buy to be able to satisfy the conditions in the problem statement.<br>
If he does not need to buy new T-shirts, print $0$.

```input1
6 1
112022
```

```output1
2
```

If Takahashi buys two logo T-shirts, he can wear T-shirts as follows:

- On the first day, he wears a logo T-shirt to go out for a meal.
- On the second day, he wears a plain T-shirt to go out for a meal.
- On the third day, he wears a logo T-shirt to attend a competitive programming event.
- On the fourth day, he has no plans, so he washes all the worn T-shirts. This allows him to reuse the T-shirts worn on the first, second, and third days.
- On the fifth day, he wears a logo T-shirt to attend a competitive programming event.
- On the sixth day, he wears a logo T-shirt to attend a competitive programming event.

If he buys one or fewer logo T-shirts, he cannot use T-shirts to meet the conditions no matter what. Hence, print $2$.

```input2
3 1
222
```

```output2
3
```

```input3
2 1
01
```

```output3
0
```

He does not need to buy new T-shirts.