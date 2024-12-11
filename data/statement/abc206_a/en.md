Score : $100$ points

## Problem Statement

The consumption tax rate in the Republic of AtCoder is $8$ percent.<br>
An energy drink shop in this country sells one can of energy drink for $N$ yen (Japanese currency) without tax.<br>
Including tax, it will be $\lfloor 1.08 \times N \rfloor$ yen, where $\lfloor x \rfloor$ denotes the greatest integer not exceeding $x$ for a real number $x$.<br>
If this tax-included price is lower than the list price of $206$ yen, print `Yay!`; if it is equal to the list price, print `so-so`; if it is higher than the list price, print `:(`.

## Constraints

- $1 \le N \le 300$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the answer.

```input1
180
```

```output1
Yay!
```

For $N=180$, the tax-included price is $\lfloor 180 \times 1.08 \rfloor = 194$ yen, which is lower than the list price of $206$ yen.

```input2
200
```

```output2
:(
```

```input3
191
```

```output3
so-so
```

In this case, the tax-included price is exactly equal to the list price of $206$ yen.