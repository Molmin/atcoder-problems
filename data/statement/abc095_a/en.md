Score : $100$ points

## Problem Statement

In "Takahashi-ya", a ramen restaurant, a bowl of ramen costs $700$ yen (the currency of Japan), plus $100$ yen for each kind of topping (boiled egg, sliced pork, green onions).

A customer ordered a bowl of ramen and told which toppings to put on his ramen to a clerk. The clerk took a memo of the order as a string $S$. $S$ is three characters long, and if the first character in $S$ is `o`, it means the ramen should be topped with boiled egg; if that character is `x`, it means the ramen should not be topped with boiled egg. Similarly, the second and third characters in $S$ mean the presence or absence of sliced pork and green onions on top of the ramen.

Write a program that, when $S$ is given, prints the price of the corresponding bowl of ramen.

## Constraints

- $S$ is a string of length $3$.
- Each character in $S$ is `o` or `x`.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the price of the bowl of ramen corresponding to $S$.

```input1
oxo
```

```output1
900
```

The price of a ramen topped with two kinds of toppings, boiled egg and green onions, is $700 + 100 \times 2 = 900$ yen.

```input2
ooo
```

```output2
1000
```

The price of a ramen topped with all three kinds of toppings is $700 + 100 \times 3 = 1000$ yen.

```input3
xxx
```

```output3
700
```

The price of a ramen without any toppings is $700$ yen.