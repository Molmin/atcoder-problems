Score : $900$ points

## Problem Statement

Joisino has a lot of red and blue bricks and a large box.
She will build a tower of these bricks in the following manner.

First, she will pick a total of $N$ bricks and put them into the box.
Here, there may be any number of bricks of each color in the box, as long as there are $N$ bricks in total.
Particularly, there may be zero red bricks or zero blue bricks.
Then, she will repeat an operation $M$ times, which consists of the following three steps:

- Take out an arbitrary brick from the box.
- Put one red brick and one blue brick into the box.
- Take out another arbitrary brick from the box.

After the $M$ operations, Joisino will build a tower by stacking the $2 \times M$ bricks removed from the box, in the order they are taken out.
She is interested in the following question: how many different sequences of colors of these $2 \times M$ bricks are possible?
Write a program to find the answer.
Since it can be extremely large, print the count modulo $10^9+7$.

## Constraints

- $1 \leq N \leq 3000$
- $1 \leq M \leq 3000$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the count of the different possible sequences of colors of $2 \times M$ bricks that will be stacked, modulo $10^9+7$.

```input1
2 3
```

```output1
56
```

A total of six bricks will be removed from the box. The only impossible sequences of colors of these bricks are the ones where the colors of the second, third, fourth and fifth bricks are all the same. Therefore, there are $2^6 - 2 \times 2 \times 2 = 56$ possible sequences of colors.

```input2
1000 10
```

```output2
1048576
```

```input3
1000 3000
```

```output3
693347555
```