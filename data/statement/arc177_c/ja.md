配点 : $500$ 点

## 問題文

$N$ 行 $N$ 列のマス目があり、上から $i$ $(1 \leq i \leq N)$ 行目・左から $j$ 列目 $(1 \leq j \leq N)$ のマスを $(i, j)$ と表します。
各マスは最初赤色か青色で塗られており、マス $(i, j)$ は $c_{i,j}=$`R` のとき赤色で、$c_{i,j}=$`B` のとき青色で塗られています。
あなたは、いくつかのマスの色を紫色に変えることで、以下の $2$ つの条件を同時に満たすようにしたいです。

**条件1**　赤色と紫色のマスのみを通って、マス $(1, 1)$ からマス $(N, N)$ に移動できる。<br>
**条件2**　青色と紫色のマスのみを通って、マス $(1, N)$ からマス $(N, 1)$ に移動できる。

ただし、**移動できる**とは、該当する色のマスのみを通って上下左右に隣接するマスへの移動を繰り返すことで、
出発地点から到着地点までたどり着けることを指します。

条件を満たすには、最小で何個のマスを紫色に変えなければならないでしょうか。

## 制約

- $3 \leq N \leq 500$
- $c_{i,j}$ は `R` または `B`
- $c_{1,1}$ および $c_{N,N}$ は `R`
- $c_{1,N}$ および $c_{N,1}$ は `B`
- $N$ は整数

## 入力

入力は以下の形式で標準入力から与えられます。  

> $N$
> 
> $c_{1,1}$$c_{1,2}$$\cdots$$c_{1,N}$
> 
> $c_{2,1}$$c_{2,2}$$\cdots$$c_{2,N}$
> 
> $\vdots$
> 
> $c_{N,1}$$c_{N,2}$$\cdots$$c_{N,N}$

## 出力

答えを出力してください。

```input1
5
RBRBB
RBRRR
RRRBR
RBBRB
BBRBR
```

```output1
3
```

以下の図のように、マス $(1, 3), (3, 2), (4, 5)$ の $3$ 個を紫色に変えると、条件を満たすようになります。

![](https://img.atcoder.jp/arc177/5840bc0619592bb932aa786dc7c70dd8.png)

```input2
5
RBBBB
BBBBB
BBBBB
BBBBB
BBBBR
```

```output2
7
```

以下の図のように、マス $(1, 2), (2, 2), (2, 3), (3, 3), (3, 4), (4, 4), (4, 5)$ の $7$ 個を紫色に変えると、条件を満たすようになります。

![](https://img.atcoder.jp/arc177/5191d760229aade1ae78a619d7282a65.png)

```input3
10
RRBBBBBBBB
BRRBBBBBBB
BBRRBBBBBB
BBBRRBBBBB
BBBBRRBBBB
BBBBBRRBBB
BBBBBBRRBB
BBBBBBBRRB
BBBBBBBBRR
BBBBBBBBBR
```

```output3
2
```

```input4
17
RBBRRBRRRRRBBBBBB
BBRBRBRRBRRBRRBBR
BRBRBBBRBBRBBRBBB
RBRRBBBBBBRRBRRRR
RRRRRBRBRRRBBRBBR
RRRRRBRRBRBBRRRBB
BBBRRRBRBRBBRRRBB
BBRRRBRBBBRBRRRBR
RRBBBBBBBBBBBRBRR
RRRBRRBRBRBRBRBBB
RRBRRRRBRBRRBRBBR
RRRBBRBRBBBRBBRBR
BBRBBRRBRRRBBRBBB
BBBRBRRRRRRRBBRBB
RRRRRBRBRBBRRBRRR
BRRRRBBBRRRBRRBBB
BBRRBBRRRBBBRBBBR
```

```output4
8
```