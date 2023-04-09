all:
	rm -rf .parcel-cache/
	cd resolver && parcel build --target node --log-level verbose
	cd example && parcel build --target node --log-level verbose
	node example/dist/index.js
