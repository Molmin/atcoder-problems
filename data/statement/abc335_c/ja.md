配点 : $300$ 点

## 問題文

高橋君は座標平面上で龍を操作するゲームを作成しました。

龍は $1$ から $N$ までの番号がついた $N$ 個のパーツからなり、パーツ $1$ を**頭** と呼びます。

最初パーツ $i$ は座標 $(i,0)$ にあります。以下のクエリを $Q$ 個処理してください。

- `1 C`: 頭を方向 $C$ に $1$ 移動させる。ここで、$C$ は `R`, `L`, `U`, `D` のいずれかであり、それぞれ $x$ 軸正方向、$x$ 軸負方向、$y$ 軸正方向、$y$ 軸負方向を意味する。頭以外の全てのパーツは前のパーツに追従するように動く。すなわち、パーツ $i\ \ (2\leq i \leq N)$ は移動前にパーツ $i-1$ があった座標に移動する。
- `2 p`: パーツ $p$ のある座標を求める。

## 制約

- $2 \leq N \leq 10^6$
- $1 \leq Q \leq 2\times 10^5$
- $1$ 種類目のクエリにおいて、$C$ は `R`, `L`, `U`, `D` のいずれか
- $2$ 種類目のクエリにおいて、$1\leq p \leq N$
- 入力に含まれる数値は全て整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $Q$
> 
> $\mathrm{query}_1$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

各クエリは以下の $2$ 種類のいずれかの形式である。

> $1$ $C$
> $2$ $p$

## 出力

$2$ 種類目のクエリの回数を $q$ として $q$ 行出力せよ。<br>
$i$ 行目には、$i$ 番目のそのようなクエリに対する答えの座標を $(x,y)$ としたとき、$x,y$ を空白区切りで出力せよ。

```input1
5 9
2 3
1 U
2 3
1 R
1 D
2 3
1 L
2 1
2 5
```

```output1
3 0
2 0
1 1
1 0
1 0
```

$2$ 種類目のクエリを処理する各タイミングにおいて、パーツの位置は次のようになっています。  

![図](https://img.atcoder.jp/abc335/ff7b430d2204e9ad66361fbc36a0fb5d.png)

複数のパーツが同じ座標に存在しうることに注意してください。