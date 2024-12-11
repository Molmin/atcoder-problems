Score : $600$ points

## Problem Statement

Takahashi is going to decide nicknames of $N$ people, person $1,\ldots,N$.

Person $i$ wants a nickname $S_i$.  To avoid giving the same nickname to multiple people, he is going to decide their nicknames as follows:

- For each $i=1,\ldots,N$ in order, decide person $i$'s nickname as follows:-   - Initialize a variable $k_i$ with $1$.
-   - Repeatedly increment $k_i$ by one while the $k_i$-time repetition of $S_i$ is someone's nickname.
-   - Let person $i$'s nickname be the $k_i$-time repetition of $S_i$.

Find $k_1,\ldots$, and $k_N$ after deciding nicknames of the $N$ people.

## Constraints

- $N \geq 1$
- $S_i$ is a string of length at least $1$ consisting of lowercase English letters.
- The sum of lengths of $S_i$ is at most $2\times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $\vdots$
> 
> $S_N$

## Output

Print $k_1,\ldots$, and $k_N$ resulting from deciding the nicknames of the $N$ people by the procedure in the problem statement.

```input1
3
snuke
snuke
rng
```

```output1
1 2 1
```

- First, he decides person $1$'s nickname.-   - Let $k_1=1$.
-   - The $k_1$-time repetition of $S_1$ is `snuke`, which is nobody's nickname, so person $1$'s nickname is set to `snuke`.
- Next, he decides person $2$'s nickname.-   - Let $k_2=1$.
-   - The $k_2$-time repetition of $S_2$ is `snuke`, which is already a nickname of person $1$, so increment $k_2$ by one to make it $2$.
-   - The $k_2$-time repetition of $S_2$ is `snukesnuke`, which is nobody's nickname, so person $2$'s nickname is set to `snukesnuke`.
- Finally, he decides person $3$'s nickname.-   - Let $k_3=1$.
-   - The $k_3$-time repetition of $S_3$ is `rng`, which is nobody's nickname, so person $3$'s nickname is set to `rng`.

Thus, $k_1$, $k_2$, and $k_3$ result in $1$, $2$, and $1$, respectively.

```input2
4
aa
a
a
aaa
```

```output2
1 1 3 2
```

- Person $1$'s nickname is set to `aa`.
- Person $2$'s nickname is set to `a`.
- Person $3$'s nickname is set to `aaa`, because `a` and `aa` are already nicknames of someone else.
- Person $4$'s nickname is set to `aaaaaa`, because `aaa` is already a nickname of someone else.

```input3
5
x
x
x
x
x
```

```output3
1 2 3 4 5
```