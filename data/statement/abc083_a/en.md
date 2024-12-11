Score : $100$ points

## Problem Statement

A balance scale tips to the left if $L &gt; R$, where $L$ is the total weight of the masses on the left pan and $R$ is the total weight of the masses on the right pan. Similarly, it balances if $L=R$, and tips to the right if $L&lt;R$.

Takahashi placed a mass of weight $A$ and a mass of weight $B$ on the left pan of a balance scale, and placed a mass of weight $C$ and a mass of weight $D$ on the right pan.

Print `Left` if the balance scale tips to the left; print `Balanced` if it balances; print `Right` if it tips to the right.

## Constraints

- $1\leq A,B,C,D \leq 10$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$

## Output

Print `Left` if the balance scale tips to the left; print `Balanced` if it balances; print `Right` if it tips to the right.

```input1
3 8 7 1
```

```output1
Left
```

The total weight of the masses on the left pan is $11$, and the total weight of the masses on the right pan is $8$. Since $11 &gt; 8$, we should print `Left`.

```input2
3 4 5 2
```

```output2
Balanced
```

The total weight of the masses on the left pan is $7$, and the total weight of the masses on the right pan is $7$. Since $7=7$, we should print `Balanced`.

```input3
1 7 6 4
```

```output3
Right
```

The total weight of the masses on the left pan is $8$, and the total weight of the masses on the right pan is $10$. Since $8&lt;10$, we should print `Right`.